const Newsletter = () => {
  return (
    <div>
      <form className="form" method="post">
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
          our newsletter
        </h4>
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            defaultValue="burcin"
            placeholder="Your Name"
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
            defaultValue="eren"
            placeholder="Your Last Name"
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-input"
            defaultValue="test@example.com"
            placeholder="Your Email"
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: "0.5rem" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
