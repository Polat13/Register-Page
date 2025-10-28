function InputField({ id, label, type = "default",labelVisible = true,roworcol}) {
  return (
     <div className={roworcol === "row" ? "flex flex-row text-white items-center" : "flex flex-col text-white"}>
      {labelVisible ? ( <label htmlFor={id} >{label}</label>) : null}
      <div>
      <input
          id={id}
          type={type}
          className="w-full  py-3 rounded-full bg-white/20 text-white text-base focus:bg-white/30 focus:shadow-md"
        />
      </div>
    </div>
  );
}

export default InputField;