export const Audio: React.FC<{ src: string; }> = ({ src }) => {
  return (
    <audio controls>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};