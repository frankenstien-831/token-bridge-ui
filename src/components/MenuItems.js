import React from "react"
import { EventsIcon, StatusIcon, StatisticsIcon } from "./menu-icons"
import { NavLink } from "react-router-dom"

export const MenuItems = ({ onMenuToggle = null, withoutEvents }) => {
  const menuItems = [
    {
      hide: withoutEvents,
      icon: <EventsIcon />,
      link: "/events",
      text: "Events"
    },
    {
      hide: false,
      icon: <StatusIcon />,
      link: "/status",
      text: "Status"
    },
    {
      hide: withoutEvents,
      icon: <StatisticsIcon />,
      link: "/statistics",
      text: "Statistics"
    }
  ]

  return menuItems.map((item, index) => {
    return (
      <NavLink key={index} to={item.link} className="menu-item" onClick={onMenuToggle}>
        {item.icon}
        {item.text}
      </NavLink>
    );
  })
}
