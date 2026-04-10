import React, { useContext, useState } from 'react';
import { AppContext } from '../components/AppContext';
import { TiPlus } from "react-icons/ti";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/* ================= SORTABLE ITEM ================= */
function SortableItem({ task, tasks, setTasks, handleChange, handleKeyDown }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="task-row"
    >
      <span>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            setTasks(tasks.map(t =>
              t.id === task.id ? { ...t, completed: !t.completed } : t
            ));
          }}
        />

        {task.isediting ? (
          <input
            type="text"
            value={task.name}
            style={{
              background: 'none',
              border: 'none',
              color: 'red',
              outline: 'none'
            }}
            onChange={(e) => handleChange(task.id, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, task.id)}
            autoFocus
          />
        ) : (
          task.name
        )}
      </span>

      <div className="actions">
        <button
          className="btn edit"
          onClick={() => {
            setTasks(tasks.map(t =>
              t.id === task.id ? { ...t, isediting: true } : t
            ));
          }}
        >
          Edit
        </button>

        <button
          className="btn delete"
          onClick={() => {
            setTasks(tasks.filter(t => t.id !== task.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

/* ================= TASK SUMMARY ================= */
function TaskSummary({ limit }) {
  const { tasks, setTasks } = useContext(AppContext);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  /* ADD TASK */
  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const nextTask = {
      id: Date.now(),
      name: newTask,
      completed: false,
      isediting: false
    };

    setTasks([nextTask, ...tasks]);
    setNewTask('');
  };

  /* EDIT TASK */
  const handleChange = (id, value) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, name: value } : t
    ));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      setTasks(tasks.map(t =>
        t.id === id ? { ...t, isediting: false } : t
      ));
    }
  };

  /* FILTER */
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'inactive') return task.completed;
    return true;
  });

  /* DRAG LOGIC */
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex(t => t.id === active.id);
    const newIndex = tasks.findIndex(t => t.id === over.id);

    setTasks(arrayMove(tasks, oldIndex, newIndex));
  };

  /* ✅ FIXED SENSORS */
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8, // prevents accidental drag on click
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="task-card">
      <h3>Task Summary</h3>

      <div className="filters">
        <button
          onClick={() => setFilter('all')}
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </button>

        <button
          onClick={() => setFilter('active')}
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter('inactive')}
          className={`filter-btn ${filter === 'inactive' ? 'active' : ''}`}
        >
          Inactive
        </button>

        <div className='task-input'>
          <input
            type="text"
            placeholder="New task"
            value={newTask}
            className='task-input-item'
            onChange={e => setNewTask(e.target.value)}
          />

          <button
            onClick={handleAddTask}
            className='task-input-add'
            style={{ backgroundColor: 'grey' }}
          >
            <TiPlus />
          </button>
        </div>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={tasks.map(t => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {(limit ? filteredTasks.slice(0, limit) : filteredTasks).map(task => (
            <SortableItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default TaskSummary;