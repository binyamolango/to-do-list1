import './style.css';

const tasks = [
  {
    description: 'Wash clothes',
    completed: true,
    index: 1,
  },
  {
    description: 'TAWG',
    completed: true,
    index: 2,
  },
  {
    description: 'Exercise',
    completed: false,
    index: 3,
  },
];

const taskList = document.getElementById('task-list');

tasks.forEach((item) => {
  taskList.innerHTML += `
    <li class="task-item row col-child">
      <div>
        <button class="checkBtn"></button>
        ${item.description}
      </div>
      <div>
        <button class="moveBtn"></button>
      </div>
    </li>
  `;
});
