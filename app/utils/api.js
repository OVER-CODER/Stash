async function dumpLayout(name) {
    const res = await fetch("http://localhost:6969/dumplayout/" + name + "/" + Date.now());
    const data = await res.text();
    console.log(data);
    return data;
}

async function restoreLayout(name) {
    const res = await fetch("http://localhost:6969/restorelayout/" + name );
    const data = await res.text();
    console.log(data);
    return data;
}

async function getLayouts() {
    const res = await fetch("http://localhost:6969/getlayouts");
    const data = await res.json();
    console.log(data);
    return data;
}

// dumpLayout("test");