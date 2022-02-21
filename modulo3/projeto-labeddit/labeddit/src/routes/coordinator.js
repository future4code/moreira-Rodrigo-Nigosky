export const goToLogin = (navigate) => {
    navigate ("/login")
}

export const goToSignUp = (navigate) => {
    navigate ("/cadastro")
}

export const goToAddPostsPage = (navigate) => {
    navigate ("/adicionar-postagem")
}

export const goPostDetailPage = (navigate, id) => {
    navigate (`/detalhes-postagem/${id}`)
}

export const goToPostsListPage = (navigate) => {
    navigate ("/")
}

