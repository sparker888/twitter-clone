export const getTweets = async (prisma) => {
    return await prisma.tweet.findMany({
      where: {},
      orderBy: [
        {
          id: 'desc',
        },
      ],
      include: {
        author: true,
      },
    })
  }