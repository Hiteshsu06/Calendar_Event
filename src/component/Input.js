export const Input = ({ Constant, type , value,onChange , className }) => {

    return (
      <div className="mb-3">
        <input
          type={type}
          name={Constant.username}
          placeholder={Constant.placeholder}
          value={value}
          id={Constant.id}
          className={Constant.className}
          onChange={onChange}
          required
        />
      </div>
    )
  }