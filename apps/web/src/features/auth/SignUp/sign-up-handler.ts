import {supabaseClient} from "@/api/client.ts";
import {toaster} from "@/components/ui/toaster.tsx";
import {RouteUrls} from "@/router/route-urls.ts";
import {SignUpFormInputs} from "@/features/auth/SignUp/SignUpForm.tsx";
import {NavigateFunction} from "react-router-dom";
import {TFunction} from "i18next";

export const createSignUpHandler = (
    navigate: NavigateFunction,
    t: TFunction,
    setSignUpError: (error: string | null) => void,
) => {
    return async (
        data: SignUpFormInputs
    ) => {
        setSignUpError(null);
        const {error} = await supabaseClient.auth.signUp({
            email: data.email,
            password: data.password,
        });

        if (error) {
            setSignUpError(error.message);
            toaster.create({
                description: t("errors.signUpErrorTitle"),
                type: "error",
                closable: true,
            });
        } else {
            toaster.create({
                description: t("success", {email: data.email}),
                type: "success",
                closable: true,
            });
            navigate(RouteUrls.HOME());
        }
    };
};
