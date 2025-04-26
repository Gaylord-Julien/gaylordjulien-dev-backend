import {factories} from '@strapi/strapi'
import dayjs from 'dayjs-with-plugins'

export default factories.createCoreController('api::song.song', ({strapi}) => {
    return {
        async guadeloupeDate(ctx) {
            const TZ = 'America/Guadeloupe'
            const now = dayjs().tz(TZ)

            // Current Guadeloupe date & time
            const guadeloupeDate = now.format('YYYY-MM-DD')
            const guadeloupeTime = now.format('HH:mm:ss')

            // Target: May 4th at 14:30
            const month = 4    // May (0-based)
            const day = 4
            const hour = 14
            const minute = 30

            // Is it already ≥ 14:30 on May 4th?
            const isTodayMay4th = now.month() === month && now.date() === day
            const after2h30 =
                now.hour() > hour ||
                (now.hour() === hour && now.minute() >= minute)

            const isVisible = isTodayMay4th && after2h30

            // Build the reveal timestamp for THIS YEAR in Guadeloupe
            const stamp = `${now.year()}-${month + 1}-${day}T${hour}:${minute}:00`
            const reveal = dayjs.tz(stamp, TZ)
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
