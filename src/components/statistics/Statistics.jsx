import stats from "../statistics/data.json";

function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export default function Result({title, stats}) {
    return (
        <section className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
    )
}