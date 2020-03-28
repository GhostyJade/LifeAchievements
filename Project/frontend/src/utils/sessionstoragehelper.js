const storage = window.sessionStorage

export function set(key, value) {
    storage.setItem(key, value)
}

export function get(key) {
    return storage.getItem(key)
}

export function remove(key) {
    storage.removeItem(key)
}

export function clear() {
    storage.clear()
}

