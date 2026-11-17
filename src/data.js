// Sample data for the UI demo. The complete project uses live APIs + database.
export const monthly = [
  { label: 'Apr', collected: 48, due: 6 }, { label: 'May', collected: 22, due: 4 }, { label: 'Jun', collected: 12, due: 3 },
  { label: 'Jul', collected: 41, due: 7 }, { label: 'Aug', collected: 19, due: 5 }, { label: 'Sep', collected: 16, due: 5 },
  { label: 'Oct', collected: 44, due: 9 }, { label: 'Nov', collected: 27, due: 11 },
]

export const modes = [
  { name: 'UPI', value: 46 }, { name: 'Net banking', value: 21 }, { name: 'Cash', value: 18 }, { name: 'Cheque', value: 9 }, { name: 'Card', value: 6 },
]

export const students = [
  { adm: 'SPS-2018-114', name: 'Aanya Kapoor', cls: 'Class 7-B', father: 'Rohit Kapoor', concession: 0 },
  { adm: 'SPS-2020-207', name: 'Vedant Mishra', cls: 'Class 5-A', father: 'Alok Mishra', concession: 10 },
  { adm: 'SPS-2016-031', name: 'Ira Sethi', cls: 'Class 10-A', father: 'Gaurav Sethi', concession: 0 },
]

export const feeHeads = [
  { id: 'tq3', head: 'Tuition fee – Q3 (Oct–Dec)', amount: 18600, due: '10 Oct', overdue: true },
  { id: 'tr3', head: 'Transport – Q3 (Route 4)', amount: 5400, due: '10 Oct', overdue: true },
  { id: 'lab', head: 'Computer lab fee', amount: 1500, due: '10 Oct', overdue: true },
  { id: 'tq4', head: 'Tuition fee – Q4 (Jan–Mar)', amount: 18600, due: '10 Jan', overdue: false },
  { id: 'tr4', head: 'Transport – Q4 (Route 4)', amount: 5400, due: '10 Jan', overdue: false },
]

export const LATE_FINE_PER_HEAD = 200

export const defaulters = [
  { id: 1, name: 'Ishaan Verma', cls: 'Class 8-A', father: 'Manoj Verma', phone: '+91 90XXXX 6612', due: 25600, days: 38, reminders: 3 },
  { id: 2, name: 'Myra Arora', cls: 'Class 3-C', father: 'Sahil Arora', phone: '+91 98XXXX 4421', due: 18600, days: 38, reminders: 2 },
  { id: 3, name: 'Kabir Thakur', cls: 'Class 11-Sci', father: 'Vikram Thakur', phone: '+91 97XXXX 1180', due: 42300, days: 69, reminders: 5 },
  { id: 4, name: 'Anvi Saxena', cls: 'Class 6-B', father: 'Ruchi Saxena', phone: '+91 99XXXX 7713', due: 7500, days: 12, reminders: 1 },
  { id: 5, name: 'Rudra Pratap', cls: 'Class 9-A', father: 'Ajay Pratap', phone: '+91 88XXXX 2034', due: 31200, days: 52, reminders: 4 },
  { id: 6, name: 'Zara Khan', cls: 'Class 2-A', father: 'Imran Khan', phone: '+91 96XXXX 5590', due: 12900, days: 21, reminders: 1 },
]
