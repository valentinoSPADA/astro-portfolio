import { useEffect, useState } from "react";
import "../styles/nav.css";


function Nav() {

  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(
    [
      {
        name: "SOBRE MI",
        href: "#about",
        selected: false
      }, {
        name: "EXPERIENCIA",
        href: "#experience",
        selected: false
      }, {
        name: "HABILIDADES",
        href: "#habilities",
        selected: false
      }, {
        name: "CONTACTO",
        href: "#contact",
        selected: false
      }, {
        name: "INICIO",
        href: "#lobby",
        selected: true
      },
    ]
  );

  function onSelect(it) {
    const updatedItems = items.map((item) => {
      if (item === it) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    });
    setItems(updatedItems);
    setOpen(false);
  }

  const handleScroll = () => {
    const updatedItems = items.map((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInSection = rect.top <= 100 && rect.bottom >= 100;
        return { ...item, selected: isInSection };
      }
      return { ...item, selected: false };
    });
    setItems(updatedItems);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleNav() {
    setOpen(value => !value)
  }

  return (
    <>
      <button className={'nav-button '  + (open ? ' button-close' : '')} onClick={toggleNav}>
        <span className={'hamburger-1 ' + (open ? ' close' : '')}></span>
        <span className={'hamburger-2 ' + (open ? ' close' : '')}></span>
        <span className={'hamburger-3 ' + (open ? ' close' : '')}></span>
      </button>
      {
        <nav className={'nav-container ' + (open ? ' in-view-nav' : '')} onClick={() => setOpen(false)}>
          <ul className={'list-container ' + (open ? ' in-view' : '')}>
            <li className="sections-nav-container">
              {
                items.map((item) => {
                  return (
                    item.href !== "#lobby" ?
                      <span className="item" key={item.href} onClick={() => onSelect(item)}>
                        <a className={"nav " + (item.selected ? "selected" : "")} href={item.href}>{item.name}</a>
                      </span> : null
                  )
                })}
            </li>
            <li className="sections-nav-container center-container">
              {items.map((item) => {
                return (
                  item.href === "#lobby" ?
                    <span className="item" key={item.href} onClick={() => onSelect(item)}>
                      <a className={"nav " + (item.selected ? "selected" : "")} href={item.href}>{item.name}</a>
                    </span> : null
                )
              })}
            </li>
          </ul>
        </nav>
      }
    </>
  )
}

export default Nav;
