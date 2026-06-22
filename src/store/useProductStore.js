import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import toast from "react-hot-toast";

export const useProductStore = create((set, get) => ({
    products: [],
    product: null,
    isLoadingProducts: false,
    isCreatingProduct: false,
    productData: {
        title: "",
        category: "",
        price: "",
        images: [],
        description: "",
    },
    currentStep: 1,
    errors: {},
    
    updateProductField: (field, value) => {
        set((state) => ({
            productData: {
                ...state.productData,
                [field]: value
            }
        }));
    },
    
    updateMultipleFields: (updates) => {
        set((state) => ({
            productData: {
                ...state.productData,
                ...updates
            }
        }));
    },
    
    validateScreen1: () => {
        const { productData } = get();
        const errors = {};
        
        if (!productData.title || productData.title.trim() === "") {
            errors.title = "Item title is required";
        } else if (productData.title.length < 3) {
            errors.title = "Title must be at least 3 characters";
        }
        
        if (!productData.category || productData.category === "Select a category") {
            errors.category = "Please select a category";
        }
        
        set({ errors });
        return Object.keys(errors).length === 0;
    },
    
    goToNextScreen: () => {
        const isValid = get().validateScreen1();
        if (isValid) {
            set({ currentStep: 2, errors: {} });
            return true;
        }
        return false;
    },
    
    goToPrevScreen: () => {
        set({ currentStep: 1 });
    },
    
    addImages: (newImages) => {
        set((state) => ({
            productData: {
                ...state.productData,
                images: [...state.productData.images, ...newImages]
            }
        }));
    },
    
    removeImage: (indexToRemove) => {
        set((state) => ({
            productData: {
                ...state.productData,
                images: state.productData.images.filter((_, index) => index !== indexToRemove)
            }
        }));
    },
    
    updateDescription: (description) => {
        set((state) => ({
            productData: {
                ...state.productData,
                description
            }
        }));
    },
    
    validateScreen2: () => {
        const { productData } = get();
        const errors = {};
        
        if (!productData.images || productData.images.length === 0) {
            errors.images = "Please upload at least one product image";
        }
        
        if (!productData.description || productData.description.trim() === "") {
            errors.description = "Product description is required";
        } else if (productData.description.length < 20) {
            errors.description = "Description must be at least 20 characters";
        }
        
        set({ errors });
        return Object.keys(errors).length === 0;
    },
    
    createProduct: async () => {
        const isValid = get().validateScreen2();
        if (!isValid) {
            toast.error("Please fix the errors before submitting");
            return false;
        }
        
        set({ isCreatingProduct: true });
        
        const { productData } = get();
        const formData = new FormData();
        formData.append("title", productData.title);
        formData.append("category", productData.category);
        formData.append("price", productData.price);
        formData.append("description", productData.description);
        
        productData.images.forEach((image) => {
            formData.append("images", image);
        });
        
        try {
            const response = await axiosInstance.post("/product/create", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            
            toast.success(response.data?.message || "Product created successfully!");
            get().resetProductForm();
            return response.data;
            
        } catch (error) {
            console.error("Error creating product:", error);
            toast.error(error?.response?.data?.message || "Failed to create product. Please try again.");
            return false;
            
        } finally {
            set({ isCreatingProduct: false });
        }
    },
    
    resetProductForm: () => {
        set({
            productData: {
                title: "",
                category: "",
                price: "",
                images: [],
                description: "",
            },
            currentStep: 1,
            errors: {},
            isCreatingProduct: false
        });
    },
    
    getProducts: async () => {
        set({ isLoadingProducts: true });
        try {
            const res = await axiosInstance.get("/product/AllProducts");
            set({ products: res.data.data });
        } catch (error) {
            console.log("Error in fetching Products", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            set({ isLoadingProducts: false });
        }
    },
    
    fetchProduct: async (id) => {
        set({ isLoadingProducts: true });
        try {
            const res = await axiosInstance.get(`/product/getProduct/${id}`);
            set({ product: res.data.data });
        } catch (error) {
            console.log("Error in fetching single Product", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            set({ isLoadingProducts: false });
        }
    }
}));