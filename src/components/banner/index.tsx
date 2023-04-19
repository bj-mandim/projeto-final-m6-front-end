import { BannerContainer } from "./styles"

export const Banner = () => {
    return(
        <>
            <BannerContainer>
                <div className="banner-content">
                    <h1 className="heading-1 white">Motors Shop</h1>
                    <p className="heading-3 white">
                        A melhor plataforma de anúncios de carros do país
                    </p>
                </div>
            </BannerContainer>
        </>
    )
}