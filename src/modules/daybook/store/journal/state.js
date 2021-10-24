export default() => ({
    isLoading: true,
    entries: [
        {
            id: '1',
            date: new Date().toDateString(),
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that',
            picture: null,
        },
        {
            id: '2',
            date: new Date().toDateString(),
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
            picture: null,
        },
    ]
})