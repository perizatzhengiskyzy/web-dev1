// Store "unread" flags
let readMessages = new WeakSet();

readMessages.add(messages[0]); // пометить сообщение как прочитанное
alert(readMessages.has(messages[0])); // true
alert(readMessages.has(messages[1])); // false

// Store read dates
let readDates = new WeakMap();

readDates.set(messages[0], new Date()); // установить дату прочтения
alert(readDates.get(messages[0])); // показывает дату