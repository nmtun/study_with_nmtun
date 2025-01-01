clock();

function clock(){
  const date = new Date();
  const indent = 2;
  const clockObj = {
    am_pm: date.getHours() >= 12 ? 'pm' : 'am' ,
    hours: date.getHours() % 12 || 12,
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    day: date.toLocaleDateString('en-us', {weekday:'long'}),
    date: date.getDate(),
    month: date.toLocaleDateString('en-us', {month:'long'}),
    year: date.getFullYear(),
  }
  const entryFormat = ([key, val]) => {
    return `${'&nbsp'.repeat(indent)}<span class="property">${key}</span>: ${valFormat(val)}`
  }
  const valFormat = (val) => {
    if(typeof val == 'number') return `<span class="number">${val}</span>`
    else if (typeof val == 'string') return `<span class="string">"${val}"</span>`
  }
  document.querySelector(".watch").innerHTML = `
    <span class="keyword">const</span> <span class="def">clock</span> = {<br>
    ${Object.entries(clockObj).reduce((str, entry) => str + entryFormat(entry) + ',<br>', '')}};`
  
  requestAnimationFrame(clock);
}