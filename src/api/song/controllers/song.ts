/**
 * song controller
 */

import {factories} from '@strapi/strapi'
import dayjs from 'dayjs-with-plugins'

export default factories.createCoreController('api::song.song', ({strapi}) => {
    return {
        async guadeloupeDate(ctx) {
            const TZ = 'America/Guadeloupe'
            const now = dayjs().tz(TZ)

            // current Guadeloupe date & time
            const guadeloupeDate = now.format('YYYY-MM-DD')
            const guadeloupeTime = now.format('HH:mm:ss')

            // 1) is today May 4th? (month() is zero-based: 0=Jan, …, 4=May)
            const isTodayMay4th = now.month() === 4 && now.date() === 4

            // 2) is it 14:30 or later?
            const after2h30 =
                now.hour() > 14 ||
                (now.hour() === 14 && now.minute() >= 30)

            const isVisible = isTodayMay4th && after2h30

            // build the reveal‐time for THIS year at 2025-05-04 14:30
            let reveal = dayjs
                .tz({
                    year: now.year(),
                    month: 4,      // May
                    date: 4,
                    hour: 14,
                    minute: 30,
                    second: 0,
                    millisecond: 0,
                }, TZ)

            // if we’re already past this year’s reveal, bump to next year
            if (now.isAfter(reveal)) {
                reveal = reveal.add(1, 'year')
            }

            const timeLeft = reveal.diff(now, 'seconds')

            return ctx.send({
                guadeloupeDate,
                guadeloupeTime,
                isVisible,
                timeLeft,
            })
        }
    }
})
