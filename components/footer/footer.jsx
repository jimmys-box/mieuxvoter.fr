/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Flex, Image, Button, Input } from 'theme-ui';
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link'
import socialItems from '../header/social.data';
import Credits from './credits';
import { useTranslation } from "next-i18next";

export default function Footer() {
    const { t } = useTranslation('common');

    return (
        <footer sx={styles.footer}>
            <Flex sx={styles.topFooter}>

                <Box sx={styles.leftTopFooter}>
                    <Link href="/" passHref>
                        <Image src="img/logo.svg" alt="" />
                    </Link>
                    <Text as="p">{t("footer logo subtitle")}</Text>
                </Box>

                <Box sx={styles.rightTopFooter}>
                    <Text as="h3">
                        {t("footer newsletter")}
                    </Text>
                    <Flex id="newsletter" sx={styles.newsletterForm}>
                        <Input type="email" name="email" id="email" mb={3} placeholder={t("footer placeholder newsletter")} />
                        <Box sx={styles.boxButton}>
                            <Button>
                                {t("footer bouton newsletter")}
                                <BsArrowRight sx={styles.arrow} /></Button>
                        </Box>
                    </Flex>
                </Box>

            </Flex>

            <hr sx={styles.divider} />

            <Flex sx={styles.middleFooter}>

                <Flex as="nav" sx={styles.menuNav}>

                    <Link href="le-jugement-majoritaire">
                        {t("menu lien 1")}
                    </Link>

                    <Link href="qui-sommes-nous">
                        {t("menu lien 2")}
                    </Link>

                    <Link href="faq">
                        {t("menu lien 3")}
                    </Link>

                    <Link href="presse">
                        {t("menu lien 4")}
                    </Link>

                    <Link href="contact">
                        {t("menu lien 5")}
                    </Link>

                </Flex>

                <Flex as="nav" sx={styles.socialNav}>
                    {socialItems.map((socialItem, i) => (
                        <Link href={socialItem.path} key={i} target="_blank">{socialItem.icon}</Link>
                    ))}
                </Flex>
            </Flex>

            <hr sx={styles.divider} />

            <Credits />
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#F8F8FF',
        px: ['30px', '30px', '30px', '30px', 8],
        pt: 8,
        pb: 6,
    },
    topFooter: {
        justifyContent: 'space-between',
        flexDirection: ['column', 'column', 'row'],
    },
    leftTopFooter: {
        width: ['100%', '100%', '40%', '25%', '20%'],
        textAlign: 'center',
        cursor: 'pointer',
        p: {
            color: 'text',
        },
    },
    rightTopFooter: {
        width: ['100%', '100%', '55%', '65%', '60%'],
        h3: {
            width: ['100%', '100%', '100%', '60%'],
            color: 'primary',
        },
        input: {
            width: ['100%', '100%', '100%', '60%'],
            border: 'none',
            borderRadius: 0,
            boxShadow: '0px 2px 0px 0px #2400FD',
            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                color: 'primary',
                fontSize: '1em',
                fontStyle: 'italic',
            },
        },
    },
    boxButton: {
        width: ['100%', '100%', '100%', '40%'],
        textAlign: ['center'],
        button: {
            backgroundColor: 'text_secondary',
            color: 'primary',
            border: 'solid 2px #2400FD',
            boxShadow: '0px 3px 0px 0px #2400FD',
        },
    },
    newsletterForm: {
        justifyContent: 'space-between',
        flexDirection: ['column', 'column', 'column', 'row'],
    },
    arrow: {
        verticalAlign: 'middle',
        fontSize: '1.5em',
        color: 'primary',
        ml: 5,
    },
    middleFooter: {

        justifyContent: 'space-between',
        flexDirection: ['column', 'column', 'row'],
    },
    menuNav: {
        color: 'text',
        fontWeight: 'bold',
        flexDirection: ['column', 'column', 'row'],
        textAlign: ['center', 'center', 'left'],
        a: {
            mr: [null, 5],
            my: [3, 2, 0],
            fontSize: ['1em', '1em', '0.5em', '0.8em', '1em'],
            textDecoration: 'none',
            color: 'text',
        },
    },
    socialNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        mt: [5, 5, 0],
        svg: {
            ml: [null, null, 3],
            fill: '#2400FD',
            cursor: 'pointer',
            width: ['1.5em', '1.5em', '1em'],
            height: ['1.5em', '1.5em', '1em'],
        },
    },
    divider: {
        my: 7,
    },
}