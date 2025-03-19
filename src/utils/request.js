const API_DOMAIN = "https://67c382b21851890165af349b.mockapi.io/";

export const get = async (path) => {
    const response = await fetch(`${API_DOMAIN}${path}`);
    return await response.json();
};

export const post = async (path, postData) => {
    const response = await fetch(`${API_DOMAIN}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    });
    return await response.json();
};

export const del = async (path) => {
    const response = await fetch(`${API_DOMAIN}${path}`, {
        method: "DELETE",
    });
    return await response.json();
};

export const put = async (path, updateData) => {
    const response = await fetch(`${API_DOMAIN}${path}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
    });
    return await response.json();
};
