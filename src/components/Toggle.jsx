const Toggle = ({ show, saved, handleToggle }) => {
  return (
    <div data-toggled={saved} className="listToggle" onClick={() => handleToggle(show)}>
      <div>
        <i className="fa fa-fw fa-plus"></i>
        <i className="fa fa-fw fa-check"></i>
      </div>
    </div>
  );
};

export default Toggle;
