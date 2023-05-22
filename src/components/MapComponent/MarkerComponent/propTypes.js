import PropTypes from 'prop-types';

export const propTypes = {
  placesDetails: PropTypes.shape({
    accessibilityData: PropTypes.shape({
      name: PropTypes.string,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          photoReference: PropTypes.string,
        }),
      ),
      phone: PropTypes.string,
      website: PropTypes.string,
    }),
    formattedAddress: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    placeId: PropTypes.string,
  }),
  onlyShowTooltip: PropTypes.bool,
  isPlace: PropTypes.bool,
  onClickIcon: PropTypes.func,
};

export const defaultProps = {
  placesDetails: {
    accessibilityData: {
      name: '',
      address: '',
      photos: [],
      phone: '',
      website: '',
    },
    formattedAddress: '',
    name: '',
    latitude: 0,
    longitude: 0,
    placeId: '',
  },
  onlyShowTooltip: false,
  isPlace: false,
  onClickIcon: () => {},
};
