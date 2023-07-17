export class SearchBusesConfig {
    SEARCH_BUSES_CONFIG = [
        {
            name: 'from',
            label: 'From',
            inputType: 'text',
            iconName: 'directions_bus',
            isDividerVisible: false,
            dividerIconName: ''
        },
        {
            name: 'to',
            label: 'To',
            inputType: 'text',
            iconName: 'departure_board',
            isDividerVisible: true,
            dividerIconName: 'swap_horiz'
        },
        {
            name: 'date',
            label: 'Date',
            inputType: 'text',
            iconName: 'calendar_month',
            isDividerVisible: true,
            dividerIconName: ''
        }
    ]
} 