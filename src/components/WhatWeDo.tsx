export function WhatWeDo({ items }: { items: readonly string[] }) {
  return (
    <div className="what-we-do">
      <p className="what-we-do-label text-fg font-bold">WHAT WE DO</p>
      <ul className="what-we-do-list">
        {items.map((item, index) => (
          <li key={item} className="what-we-do-row">
            <span className="service-row-num text-fg">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="what-we-do-name text-green">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
