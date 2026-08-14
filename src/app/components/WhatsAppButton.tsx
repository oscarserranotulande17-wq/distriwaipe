export default function WhatsAppButton() {
  const phoneNumber = "573148961094"; // Colombia +57
  const message = "¡Hola! Quiero más información sobre sus productos.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1000,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <svg
        viewBox="0 0 32 32"
        width="34"
        height="34"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.362.687 4.564 1.872 6.418L4 29l7.775-1.837A11.94 11.94 0 0 0 16.001 27C22.629 27 28 21.627 28 15S22.629 3 16.001 3zm6.995 17.09c-.297.834-1.47 1.523-2.404 1.723-.639.135-1.474.243-4.284-.92-3.594-1.487-5.906-5.14-6.086-5.379-.178-.239-1.453-1.933-1.453-3.687 0-1.754.914-2.615 1.24-2.973.297-.328.65-.41.867-.41.217 0 .434.002.623.011.2.01.469-.076.734.56.297.696.998 2.398 1.086 2.573.088.176.146.381.03.618-.117.238-.176.386-.354.594-.178.207-.377.463-.539.622-.178.176-.363.365-.156.716.207.351.918 1.514 1.972 2.452 1.354 1.207 2.496 1.582 2.848 1.759.352.176.557.147.762-.088.207-.235.881-1.028 1.117-1.38.235-.351.469-.294.793-.176.324.117 2.06.972 2.412 1.148.352.176.586.264.674.412.088.147.088.847-.209 1.681z" />
      </svg>
    </a>
  );
}