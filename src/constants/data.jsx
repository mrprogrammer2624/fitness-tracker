import { Link } from "react-router-dom";
import { Avatar, Tag } from "antd";

function getItem(label, key, path) {
  return {
    key,
    label: path ? <Link to={path}>{label}</Link> : label,
  };
}

export const DashboardAsideMenu = [
  getItem("Dashboard", "/", "/"),
  getItem("Workout Log", "/workout-log", "/workout-log"),
  getItem("Statistics", "/statistics", "/statistics"),
  getItem("GoalSetting", "/goals", "/goals"),
  getItem("Settings", "/settings", "/settings"),
];

export const DashboardCardMenu = [
  {
    key: 1,
    title: "Total Revenue",
    date: "01/01/2001",
    content: "666",
  },
  {
    key: 2,
    title: "Total Project",
    date: "01/01/2001",
    content: "666",
  },
  {
    key: 3,
    title: "Total Active Projects",
    date: "01/01/2001",
    content: "666",
  },
  {
    key: 4,
    title: "In Progress Project",
    date: "01/01/2001",
    content: "666",
  },
  {
    key: 5,
    title: "Total Completed Project",
    date: "01/01/2001",
    content: "666",
  },
  {
    key: 6,
    title: "Total Padding Project",
    date: "01/01/2001",
    content: "666",
  },
];

export const columns = [
  {
    title: "Employee Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#87d068", marginRight: 8 }}>
          {text[0]}
        </Avatar>
        {text}
      </div>
    ),
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "designation",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Check In Time",
    dataIndex: "checkInTime",
    key: "checkInTime",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "";
      switch (status.toLowerCase()) {
        case "on time":
          color = "var(--clr-success)";
          break;
        case "late":
          color = "var(--clr-error)";
          break;
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
];

export const data = [
  {
    key: "2",
    name: "Jim Green",
    designation: "Project Manager",
    type: "Part-time",
    checkInTime: "09:10 AM",
    status: "Late",
  },
  {
    key: "3",
    name: "Joe Black",
    designation: "UI Designer",
    type: "Contract",
    checkInTime: "08:55 AM",
    status: "On time",
  },
  {
    key: "4",
    name: "Sarah White",
    designation: "HR Manager",
    type: "Full-time",
    checkInTime: "09:15 AM",
    status: "Late",
  },
  {
    key: "5",
    name: "Chris Green",
    designation: "Backend Developer",
    type: "Full-time",
    checkInTime: "08:50 AM",
    status: "On time",
  },
  {
    key: "6",
    name: "Sophia Brown",
    designation: "QA Engineer",
    type: "Contract",
    checkInTime: "09:20 AM",
    status: "Late",
  },
  {
    key: "7",
    name: "Henry Jones",
    designation: "Data Analyst",
    type: "Full-time",
    checkInTime: "09:00 AM",
    status: "On time",
  },
  {
    key: "8",
    name: "Emily Davis",
    designation: "Frontend Developer",
    type: "Part-time",
    checkInTime: "09:25 AM",
    status: "Late",
  },
  {
    key: "9",
    name: "Michael Scott",
    designation: "Sales Manager",
    type: "Full-time",
    checkInTime: "08:45 AM",
    status: "On time",
  },
  {
    key: "1",
    name: "John Brown",
    designation: "Software Developer",
    type: "Full-time",
    checkInTime: "09:00 AM",
    status: "On time",
  },
  {
    key: "10",
    name: "Olivia Johnson",
    designation: "Product Owner",
    type: "Full-time",
    checkInTime: "09:05 AM",
    status: "On time",
  },
  {
    key: "9",
    name: "Michael Scott",
    designation: "Sales Manager",
    type: "Full-time",
    checkInTime: "08:45 AM",
    status: "On time",
  },
  {
    key: "10",
    name: "Olivia Johnson",
    designation: "Product Owner",
    type: "Full-time",
    checkInTime: "09:05 AM",
    status: "On time",
  },
];

//
export const employeeColumns = [
  {
    title: "Employee Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#87d068", marginRight: 8 }}>
          {text[0]}
        </Avatar>
        {text}
      </div>
    ),
  },
  {
    title: "CTC",
    dataIndex: "ctc",
    key: "ctc",
  },
  {
    title: "Salary Per Month",
    dataIndex: "salaryPerMonth",
    key: "salaryPerMonth",
  },
  {
    title: "Deduction",
    dataIndex: "deduction",
    key: "deduction",
    render: (text) => <>{text[0] ? text : "-"}</>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "";
      switch (status.toLowerCase()) {
        case "completed":
          color = "var(--clr-success)";
          break;
        case "pending":
          color = "var(--clr-alert)";
          break;
        case "progress":
          color = "var(--clr-error)";
          break;
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
];

export const employeeData = [
  {
    key: "1",
    name: "John Doe",
    ctc: "$50,000",
    salaryPerMonth: "$4,167",
    deduction: "",
    status: "Completed",
  },
  {
    key: "2",
    name: "Jane Smith",
    ctc: "$48,000",
    salaryPerMonth: "$4,000",
    deduction: "$150",
    status: "Pending",
  },
  // Add more employees here (total of 20)
  {
    key: "3",
    name: "Michael Johnson",
    ctc: "$55,000",
    salaryPerMonth: "$4,583",
    deduction: "$250",
    status: "Completed",
  },
  {
    key: "4",
    name: "Sarah Williams",
    ctc: "$60,000",
    salaryPerMonth: "$5,000",
    deduction: "$300",
    status: "Pending",
  },
  {
    key: "5",
    name: "Robert Brown",
    ctc: "$47,500",
    salaryPerMonth: "$3,958",
    deduction: "$100",
    status: "Completed",
  },
];

export const menuItems = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: " <SmileOutlined />",
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

export const scheduleData = [
  {
    date: "2026-07-06",
    time: "09:30",
    title: "Practical Task Review",
    role: "UI/UX Designer",
  },
  {
    date: "2026-07-06",
    time: "12:00",
    title: "Resume Review",
    role: "Magento Developer",
  },
  {
    date: "2026-07-06",
    time: "01:30",
    title: "Final HR Round",
    role: "Sales Manager",
  },
  {
    date: "2026-07-07",
    time: "09:30",
    title: "Practical Task Review",
    role: "Front end Developer",
  },
  { date: "2026-07-07", time: "11:00", title: "TL Meeting", role: "React JS" },
];

// * Dashboard Data * //

// * Holidays Data * //
export const holidaysColumns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Day",
    dataIndex: "day",
    key: "day",
  },
  {
    title: "Holiday Name",
    dataIndex: "holidayName",
    key: "holidayName",
  },
];
export const holidaysData = [
  {
    key: "1",
    date: "January 01, 2026",
    day: "Tuesday",
    holidayName: "New Year",
  },
  {
    key: "2",
    date: "January 07, 2026",
    day: "Saturday",
    holidayName: "International Programmers' Day",
  },
  {
    key: "3",
    date: "February 04, 2026",
    day: "Saturday",
    holidayName: "World Cancer Day",
  },
  {
    key: "4",
    date: "April 01, 2026",
    day: "Saturday",
    holidayName: "April Fool Day",
  },
  {
    key: "5",
    date: "May 07, 2026",
    day: "Monday",
    holidayName: "International Programmers' Day",
  },
  {
    key: "6",
    date: "May 22, 2026",
    day: "Tuesday",
    holidayName: "International Day for Biological Diversity",
  },
  {
    key: "7",
    date: "June 05, 2026",
    day: "Monday",
    holidayName: "International Day for Biological Diversity",
  },
  {
    key: "8",
    date: "August 07, 2026",
    day: "Monday",
    holidayName: "International Friendship Day",
  },
  {
    key: "9",
    date: "September 15, 2026",
    day: "Friday",
    holidayName: "International Day of Democracy",
  },
  {
    key: "10",
    date: "November 14, 2026",
    day: "Tuesday",
    holidayName: "World Diabetes Day",
  },
  {
    key: "11",
    date: "December 25, 2026",
    day: "Monday",
    holidayName: "Merry Christmas",
  },
];

// * Notification Data * //
export const notificationsListing = [
  {
    title: "Leave Request",
    description: "@Econev Fox has applied for leave",
    time: "Just Now",
  },
  {
    title: "Check In Issue",
    description: "@Dina shared a message regarding check in issue",
    time: "11:16 AM",
  },
  {
    title: 'Applied job for "Sales Manager" Position',
    description: "@Vasilisa has applied for job",
    time: "09:00 AM",
  },
  {
    title: "Robert Fox has share his feedback",
    description: '"It was an amazing experience with your organisation"',
    time: "Yesterday",
  },
  {
    title: "Password Update successfully",
    description: "Your password has been updated successfully",
    time: "Yesterday",
  },
];
