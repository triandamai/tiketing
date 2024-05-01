import type {Product, ProductCategory, ProductForm} from "~/types/data/product";
import {getExtensionFromMime} from "~/composables/useFile";
import {notify} from "@kyvg/vue3-notification";

//https://campoerseni.vercel.app

export const useProduct = defineStore<string, {
    size: number,
    loading: boolean,
    search: string,
    product: Array<Product>,
    productCategory: Array<ProductCategory>,
    productForm: ProductForm | null
}, {}, {
    loadData: () => Promise<void>
    saveProduct: (form: ProductForm) => Promise<boolean>
}>("product", {
    state: () => ({
        size: 1,
        loading: false,
        search: "",
        product: [
            {
                id: 4567,
                content: "",
                cover: "",
                title: "Asessment Potensi",
                created_at: "03 April 2024",
                updated_at: "03 April 2024"
            }
        ],
        productCategory: [],
        productForm: null
    }),
    getters: {},
    actions: {
        async loadData() {

        },
        async saveProduct(
            form: ProductForm
        ): Promise<boolean> {

            return true
        }
    }
})