const logo = new URL("Logo.svg", import.meta.url);

export function Logo() {
    return <img src={logo} alt="Logo" />
}