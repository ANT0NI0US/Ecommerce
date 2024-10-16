import { useState } from "react";
import { useForm } from "react-hook-form";
import { MultiValue, SingleValue } from "react-select";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/ui/Button";
import ModalFormGrid from "@/ui/ModalFormGrid";
import TextArea from "@/ui/TextArea";
import Input from "@/ui/Input";
import Choose from "@/ui/Choose";
import { newProductProps, productState } from "@/utils/types";
import { isOnlySpaces } from "@/utils/helpers";
import { addProduct } from "@/store/service/productService";
import { AppDispatch } from "@/store";

const initialState: newProductProps = {
  productName: "",
  shortDesc: "",
  description: "",
  price: 0,
  category: "",
  imgUrl: "",
};

interface Option {
  value: string;
  label: string;
}

interface addProductFormProps {
  onCloseModal: () => void;
}

const categories = ["sofa", "mobile", "chair", "watch", "wireless"];
const allowedImagesTypes = ["jpg", "png", "webp", "jpeg"];

export default function AddProductForm({ onCloseModal }: addProductFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const { isLoading } = useSelector((state: productState) => state.product);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    trigger,
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const handleSelectedCategories = (
    selectedOptions:
      | MultiValue<Option>
      | readonly Option[]
      | SingleValue<Option>
      | null,
  ) => {
    if (selectedOptions && "value" in selectedOptions) {
      setValue("category", selectedOptions.value);
      trigger("category");
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setValue(name as keyof newProductProps, files[0]);
      await trigger(name as keyof newProductProps);
    }
  };

  const validateFile = (value: string | File | null) => {
    if (!value) {
      return "This Field is required";
    }

    if (value instanceof File) {
      const fileExtension = value.type.split("/")[1];
      if (!allowedImagesTypes.includes(fileExtension)) {
        setImgUrl(null);
        return "Only image extensions of type (jpg, png, webp) are allowed to be uploaded.";
      }
      setImgUrl(URL.createObjectURL(value));
      return true;
    }

    return true;
  };

  const handleAddNewProduct = (data: newProductProps) => {
    dispatch(
      addProduct({
        ...data,
        reviews: [],
        avgRating: 5,
      }),
    )
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success("Product added successfully");
        reset();
        onCloseModal();
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };
  return (
    <form onSubmit={handleSubmit(handleAddNewProduct)}>
      <h1 className="my-[20px] font-bold text-primary-color-light dark:text-primary-color">
        Add Product
      </h1>

      <ModalFormGrid>
        <Input
          placeholder="Name"
          disabled={isLoading}
          error={errors?.productName?.message}
          {...register("productName", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
        />

        <Input
          placeholder="Price"
          disabled={isLoading}
          error={errors?.price?.message}
          {...register("price", {
            required: "This Field is required",
          })}
        />

        <TextArea
          placeholder="Short Description"
          disabled={isLoading}
          error={errors?.shortDesc?.message}
          {...register("shortDesc", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
        />

        <TextArea
          placeholder="Description"
          disabled={isLoading}
          error={errors?.description?.message}
          {...register("description", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
          })}
        />

        <Choose
          placeholder="Select Category"
          data={categories?.map((category) => ({
            value: category,
            label: category,
          }))}
          disabled={isLoading}
          error={errors?.category?.message}
          {...register("category", {
            required: "This Field is required",
          })}
          onChange={handleSelectedCategories}
        />

        <div className="w-full">
          <Input
            placeholder="Upload Image"
            showLabel={false}
            type="file"
            accept=".jpg, .png, .webp, .jpeg"
            disabled={isLoading}
            error={errors?.imgUrl?.message}
            {...register("imgUrl", {
              validate: { validateFile },
            })}
            onChange={handleImageChange}
          />

          {imgUrl && (
            <img
              src={imgUrl}
              alt="Selected"
              className="mx-auto mt-[10px] max-h-[200px]"
            />
          )}
        </div>
      </ModalFormGrid>
      <div className="ml-auto mt-10 w-[150px]">
        <Button ArialLabel="add new Product" type="submit" loading={isLoading}>
          Add
        </Button>
      </div>
    </form>
  );
}
