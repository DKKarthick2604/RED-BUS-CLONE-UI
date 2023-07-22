/**
* CREATED BY    : Karthick D K 
* CREATED DATE  : 20 JUNE 2023
* MODIFIED BY   : Karthick D K
* MODIFIED DATE : 20 JUNE 2023
* DESCRIPTION   : This config will contain search buses config
**/

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