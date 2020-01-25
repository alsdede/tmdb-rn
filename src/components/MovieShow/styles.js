import {
    BORDER_RADIUS_LG,
    FONT_SIZE_LG,
    FONT_SIZE_MD,
    FONT_SIZE_XM,
    MOVIE_CONTENT_WIDTH,
    POSTER_CONTAINER_HEIGHT,
    POSTER_CONTAINER_WIDTH,
    screen,
    SPACE_LG,
    SPACE_LG2,
    SPACE_MD,
    SPACE_SM,
    SPACE_XS,
} from '../../utils/sizes';

export const PosterStyles = {
    container: {
        marginTop: screen.height / 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: POSTER_CONTAINER_WIDTH,
        height: POSTER_CONTAINER_HEIGHT,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: SPACE_SM },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    poster: {
        position: 'absolute',
        borderRadius: BORDER_RADIUS_LG,
    },
};
