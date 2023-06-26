import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "le nom doit contenir 3 caractères minimum" }),
  amount: z
    .number({ invalid_type_error: "amount field is required" })
    .min(18, { message: "l'amount doit être supérieur ou égal à 18 ans" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // const onSubmit = (data: FieldValues) => console.log("affiche les datas" + data);
  const onSubmit = (data: FieldValues) => console.log("affiche les datas" + data.description);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="" className="form-label">Category</label>
        <select type="text" className="form-control" >
          <option value=""></option>
          <option value="">Groceries</option>
          <option value="">Utilities</option>
          <option value="">Entertainment</option>

        </select>
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
