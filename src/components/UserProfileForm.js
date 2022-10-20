import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstname: yup.string().trim().required("This field is required!").min(3, "Min length is 3"),
  lastname: yup.string().trim().required("This field is required!").min(3, "Min length is 3"),
  country: yup.string().required("Please select a country!")
});


const UserProfileForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
    resolver: yupResolver(schema)
  });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>User Profile:</legend>
                <div>
                    <label>Firstname:{""}
                        <input id="firstname"
                            type="text"
                            {...register("firstname")}
                        />
                        {errors.firstname && (
                        <div className="error">{errors.firstname.message}</div>
                        )}
                    </label>
                </div>
                
                <div>
                    <label>Lastname:
                        <input id="lastname"
                            type="text"
                            {...register("lastname")}
                        />
                        {errors.lastname && (
                        <div className="error">{errors.lastname.message}</div>
                        )}
                    </label>
                </div>
                
                <div>
                    <select id="country" {...register("country", { required: true })}>
                        <option value="">Select...</option>
                        <option value="ua">Ukraine</option>
                        <option value="pl">Poland</option>
                        <option value="usa">USA</option>
                    </select>
                    {errors.country && (
                    <div className="error">{errors.country.message}</div>
                    )}
                </div>
                
                <button type="submit">Send</button>
                
            </fieldset>
        </form>
    )
};


export default UserProfileForm;