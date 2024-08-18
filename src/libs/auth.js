import  {SignJWT,jwtVerify} from "jose"
import { cookies } from "next/headers"

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export const encrypt = (payload) => {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encodedKey)
}

export const decrypt = async (session) => {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload
    } catch (error) {
        console.log('Failed to verify session')
    }
}

export const createSession = async (userId) => {
    const expiresAt = new Date(Date.now() + 1 * 60 * 60 * 1000)
    const session = await encrypt({ userId, expiresAt })

    cookies().set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })

}

export const destroySession = async()=>{
    cookies().delete('session')
}


