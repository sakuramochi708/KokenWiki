import React, { useEffect } from "react"
import { Provider } from "react-redux"
import { store, actions } from "../redux"
import MdEditor from "./MdEditor"

export default ({
    markdown,
    usergroups,
    editable,
    readable_group_id,
    editable_group_id,
}) => {
    useEffect(() => {
        store.dispatch(
            actions.setContent({
                markdown,
                usergroups,
                is_editable: editable,
                readable_group_id,
                editable_group_id,
            })
        )
    }, [markdown, usergroups, editable, readable_group_id, editable_group_id])
    return (
        <Provider store={store}>
            <MdEditor />
        </Provider>
    )
}
