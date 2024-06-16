import { Input } from "../../Input";
import { Wrapper } from "./styled";
import searchPhrase from "./searchPhrase"
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";

export const Search = () => {

    const query = useQueryParameter(searchPhrase);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchPhrase,
            value: target.value.trim() !== "" ? target.value : undefined,
        })
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>


    );
};
