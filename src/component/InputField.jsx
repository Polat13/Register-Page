function InputField({ id, label, type = "default", labelVisible = true,roworcol}) {
  return (
     <div className={roworcol === "row" ? "flex flex-row text-white items-center duration-500" : "flex duration-500 flex-col text-white"}>
      {labelVisible ? ( <label htmlFor={id} >{label}</label>) : null}
      <div>
      <input
          id={id}
          type={type}
          className="w-full  py-3 rounded-full bg-white/20 text-white text-base focus:bg-white/30 focus:shadow-md "
          required
        />
      </div>
    </div>
  );
}

export default InputField;