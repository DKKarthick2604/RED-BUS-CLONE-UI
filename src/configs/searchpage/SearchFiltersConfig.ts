export class SearchFiltersConfig {
    SEARCH_FILTERS_CONFIG = [
        {
            title: 'DEPARTURE TIME',
            items: [
                {
                    name: 'Before 6 am (0)',
                    iconName: 'notifications'
                },
                {
                    name: '6 am to 12 pm (1)',
                    iconName: 'light_mode'
                },
                {
                    name: '12 am to 6 pm (0)',
                    iconName: 'wb_twilight'
                },
                {
                    name: 'After 6 pm (62)',
                    iconName: 'dark_mode'
                }
            ]
        },
        {
            title: 'BUS TYPES',
            items: [
                {
                    name: 'SEATER (32)',
                    iconName: ''
                },
                {
                    name: 'SLEEPER (60)',
                    iconName: ''
                },
                {
                    name: 'AC (30)',
                    iconName: ''
                },
                {
                    name: 'NON AC (33)',
                    iconName: ''
                }
            ]
        },
        {
            title: 'SEAT AVAILABILITY',
            items: [
                {
                    name: 'Single Seats (49)',
                    iconName: ''
                }
            ]
        },
        {
            title: 'ARRIVAL TIME',
            items: [
                {
                    name: 'Before 6 am (10)',
                    iconName: 'notifications'
                },
                {
                    name: '6 am to 12 pm (12)',
                    iconName: 'light_mode'
                },
                {
                    name: '12 am to 6 pm (30)',
                    iconName: 'wb_twilight'
                },
                {
                    name: 'After 6 pm (32)',
                    iconName: 'dark_mode'
                }
            ]
        }
    ]
    SEARCH_FILTERS_SEARCH_CONFIG = [
        {
            name: 'BOARDING POINT',
        },
        {
            name: 'DROPING POINT',
        },
        {
            name: 'OPERATOR',
        }
    ]
    SEARCH_AMENITIES_CONFIG = [
        {
            name: 'WIFI (1)',
            iconName: 'wifi'
        },
        {
            name: 'Water Bottle (19)',
            iconName: 'water_bottle'
        },
        {
            name: 'Blankets (25)',
            iconName: 'blanket'
        },
        {
            name: 'Charging Point (52)',
            iconName: 'power'
        },
        {
            name: 'Movie (17)',
            iconName: 'movie'
        },
        {
            name: 'Bed Sheet (10)',
            iconName: 'bed'
        }
    ]
}