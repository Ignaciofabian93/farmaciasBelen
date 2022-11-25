export default function Map({ src }) {
  return (
    <div className="rounded-4 mb-4">
      <iframe
        src={src}
        className="map rounded mx-auto"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox
      ></iframe>
    </div>
  );
}
