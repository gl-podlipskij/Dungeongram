import {Context, useContext} from "react";


function useExtract<T, N extends keyof T>(context: Context<T | null>, name: N, contextName:string):T[N] {
    const contextValue = useContext<T | null>(context);

    if (contextValue === null || contextValue === undefined) {
        throw new Error(`Cannot use ${name.toString()} out of ${contextName} context provider`);
    }

    return contextValue[name];
}

export default useExtract;