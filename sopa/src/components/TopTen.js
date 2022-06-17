function TopTenButton() {
  const onHighScoreClick = () => {
    let element = document.getElementById("Top10");
    element.classList.toggle("hidden");
  };

  return (
    <div className="menuTop10">
      <button onClick={onHighScoreClick} className="editButt">Top10</button>
    </div>
  );
}

export default TopTenButton;
