export async function onBeforeRender(pageContext) {
  const maxLength = Number(pageContext.routeParams.maxLength) || null;

  return {
    pageContext: {
      maxLength
    }
  };
};

export const passToClient = ['maxLength'];
