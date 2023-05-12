import CircularProgress from "@mui/joy/CircularProgress/CircularProgress";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="neutral" size="lg" />
    </div>
  );
};

export default Spinner;
