import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    console.error(err);
    return err;
  }
};
const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submit";
  return (
    <div>
      <Form className="form" method="POST">
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
            required
            Z
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
            required
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
            required
            placeholder="Your Email"
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: "0.5rem" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submiting" : "Submit"}
        </button>
      </Form>
    </div>
  );
};

export default Newsletter;
