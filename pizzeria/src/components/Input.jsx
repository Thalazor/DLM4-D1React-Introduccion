export const Input = ({ type, placeholder, errorMessage, onChange }) => {
    return (
      <div className="mb-3">
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className="form-control"
        />
        {errorMessage && (
          <div className="text-danger">{errorMessage}</div>
        )}
      </div>
    )
  }
  