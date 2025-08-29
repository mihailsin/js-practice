/**
 * Event Loop Sequence:
 * 1 - timer queue - setTimeout, setInterval callbacks
 * 2 - I/O queue - I/O callbacks
 * 3 - check queue - setImmediate callbacks
 * 4 - close queue - close handlers
 */
