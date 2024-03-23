import { InfoUser } from "@/types";
import { useCallback, useState } from "react";
import { infoUser } from "../services/infoUser";

export function useInfoUser(){
    const[dataInfoUser, setDataInfoUser] = useState<InfoUser|{}>({});
    const [isInfoUserLoading, setIsInfoUserLoading] = useState(false);
    const [errorInfoUser, setErrorInfoUser] = useState(false);

    const getInfoUser = useCallback(async () => {
        setIsInfoUserLoading(true);
        setErrorInfoUser(false);
        try {
            const response = await infoUser();
            const data = await response.json();
            setDataInfoUser(data);
        } catch (error) {
            setErrorInfoUser(true);
        } finally {
            setIsInfoUserLoading(false);
        }
    }, []);

    return { dataInfoUser, isInfoUserLoading, errorInfoUser, getInfoUser, setDataInfoUser };
}