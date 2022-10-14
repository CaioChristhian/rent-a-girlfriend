import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeConfig';
import { CalendarProps } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br'

interface DayProps {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
}

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  },
}

interface CalendarsProps extends CalendarProps{
  markedDates: MarkedDateProps;
  onDayPress?: (date: DayProps) => void;
}

function Calendar({ markedDates, onDayPress, ...rest }: CalendarsProps){
  const theme = useTheme();

  return (
    <CustomCalendar
      {...rest}
      renderArrow={( direction ) => 
        <Feather 
          name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
          size={24}
          color={theme.colors.text}
        />
      }

      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}

      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_500,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      
      firstDay={1}
      minDate={String(new Date())}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export {
  Calendar,
  MarkedDateProps,
  DayProps
}